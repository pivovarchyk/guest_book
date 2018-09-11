<?php
namespace Pi\Guestbook\App;

use Pi\Guestbook\App\AController as AController;
use Pi\Guestbook\Database\Message;

class IndexController extends AController
{
    public $tMessage;

    public function __construct()
    {
        $this->tMessage = new Message();
    }

    public function getListMessages($sort, $added)
    {
      $messages = $this->tMessage->getAllItems($sort);
      $i = 0;
      $j = 0;
      $blocksOfMessages = array();
      foreach ($messages as $message) {
          $blocksOfMessages[$i][$j] = $message;
          if ($j == 25) {
              $i += 1;
              $j = 0;
          }
          $j += 1;
      }
      switch ($added) {
        case 'yes':
            $added_message = 'сообщение добавлено';
            break;
        case 'no':
            $added_message = 'сообщение не добавлено';
            break;
        default:
            $added_message = '';
      }
    }

    public function setMessage($post)
    {
        $messages = $this->tMessage->addItem($params);
        if ($messages) {
            return 'yes';
        }
        else {
            return 'no';
        }
    }

    public function getBody($sort, $added)
    {
        $this->render('indexView', [
            'sort' => $sort,
            'blocksOfMessages' => $blocksOfMessages,
            'added_message' => $added_message
        ]);
    }

    public function addMessage($params)
    {
        $messages = $this->tMessage->addItem($params);
    }
}
