<?php
declare(strict_types=1);

namespace Piv\Guestbook\App\Controllers\UploadedFile;

use \Zend\Diactoros\UploadedFile;

class FileTxt
{

  protected $file;

  public function __construct(UploadedFile $file)
  {
      $this->file = $file;
  }

  public function getFile(): UploadedFile
  {
      return $this->file;
  }

  public function setFile(UploadedFile $file): void
  {
      $this->file = $file;
  }

  public function moveFileTo(string $filenameTo): void
  {
      $this->image->moveTo($filenameTo.$this->file->getClientFilename());
  }

}
