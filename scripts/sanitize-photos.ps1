Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath([float]$x, [float]$y, [float]$w, [float]$h, [float]$r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function Add-PlateMask($graphics, $x, $y, $w, $h) {
  $path = New-RoundedRectPath $x $y $w $h 18
  $fill = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(236, 241, 245, 248))
  $stroke = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(220, 148, 163, 184), 4)
  $graphics.FillPath($fill, $path)
  $graphics.DrawPath($stroke, $path)
  $fill.Dispose()
  $stroke.Dispose()
  $path.Dispose()
}

function Pixelate-Region($bitmap, [int]$x, [int]$y, [int]$w, [int]$h, [int]$scale) {
  $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
  $crop = $bitmap.Clone($rect, $bitmap.PixelFormat)
  $smallW = [Math]::Max(1, [int]($w / $scale))
  $smallH = [Math]::Max(1, [int]($h / $scale))
  $small = New-Object System.Drawing.Bitmap($smallW, $smallH)

  $gSmall = [System.Drawing.Graphics]::FromImage($small)
  $gSmall.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBilinear
  $gSmall.DrawImage($crop, 0, 0, $smallW, $smallH)
  $gSmall.Dispose()

  $g = [System.Drawing.Graphics]::FromImage($bitmap)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
  $g.DrawImage($small, $rect)
  $g.Dispose()

  $crop.Dispose()
  $small.Dispose()
}

function Load-Bitmap($path) {
  $bytes = [System.IO.File]::ReadAllBytes($path)
  $ms = New-Object System.IO.MemoryStream(,$bytes)
  $img = [System.Drawing.Image]::FromStream($ms)
  $bmp = New-Object System.Drawing.Bitmap($img)
  $img.Dispose()
  $ms.Dispose()
  return $bmp
}

function Save-JpegTemp($bitmap, $path) {
  $tmp = [System.IO.Path]::ChangeExtension($path, '.tmp.jpg')
  $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 92L)
  $bitmap.Save($tmp, $encoder, $params)
  $params.Dispose()
  Move-Item -Force $tmp $path
}

function Edit-Image($path, $actions) {
  $bitmap = Load-Bitmap $path
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

  foreach ($a in $actions) {
    if ($a.type -eq 'plate') {
      Add-PlateMask $graphics $a.x $a.y $a.w $a.h
    }
    elseif ($a.type -eq 'pixelate') {
      Pixelate-Region $bitmap $a.x $a.y $a.w $a.h $a.scale
    }
  }

  $graphics.Dispose()
  Save-JpegTemp $bitmap $path
  $bitmap.Dispose()
  Write-Output ('edited ' + [System.IO.Path]::GetFileName($path))
}

$base = 'c:\Users\aiden\henry-car-detailing\public'

Edit-Image (Join-Path $base 'Cruze_back_dirty.jpg') @(
  @{ type = 'plate'; x = 1710; y = 1810; w = 760; h = 240 },
  @{ type = 'pixelate'; x = 170; y = 965; w = 250; h = 120; scale = 10 }
)

Edit-Image (Join-Path $base 'Cruze_Back_Clean.jpg') @(
  @{ type = 'plate'; x = 1045; y = 1980; w = 980; h = 340 },
  @{ type = 'plate'; x = 80; y = 1110; w = 360; h = 220 }
)

Edit-Image (Join-Path $base 'Cruze_front_dirty.jpg') @(
  @{ type = 'plate'; x = 985; y = 2875; w = 1110; h = 360 },
  @{ type = 'pixelate'; x = 1660; y = 650; w = 150; h = 210; scale = 10 }
)

Edit-Image (Join-Path $base 'Cruze_Front_clean.jpg') @(
  @{ type = 'plate'; x = 980; y = 3040; w = 1120; h = 360 },
  @{ type = 'pixelate'; x = 1680; y = 690; w = 140; h = 200; scale = 10 }
)

Edit-Image (Join-Path $base 'Cruze_passanger_clean.jpg') @(
  @{ type = 'pixelate'; x = 1500; y = 760; w = 160; h = 220; scale = 10 }
)
