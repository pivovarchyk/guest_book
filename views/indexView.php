<!DOCTTYPE html>
<html>
<head>
  <title> Гостевая книга </title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="keywords" content="гостевая книга, сообщения" />
  <meta name="description" content="Гостевая книга" />
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

  <div class="grid">
    <!-- Заголовок -->
    <div class="box header">
      <h1>Гостевая книга</h1>
    </div>

    <!-- Форма для ввода нового сообщения -->
    <div class="box add-message">
      <form>
        <h4>Имя пользователя *</h4>
        <input class='username' />
        <h4>e-mail*</h4>
        <input class='email' />
        <h4>Текст *</h4>
        <input class='text' />
        <input class='captcha' />
        <h4>Изображение </h4>
        <input class='image' />
        <h4>Файл </h4>
        <input class='file' type='file' />
        <input class='sign-in-button' type='submit' value='Sign In' />
      </form>
    </div>

    <!-- Вывод списка сообщений с учетом заданной сортировки -->
    <div class="box list-messages">
      <form>
        <div class="title-message">
          <h4> Имя </h4>
          <div class="arrows-title-message">
            <div><input type="image" src=<?php echo $sort=="name_desc" ? "images/double-up.png": "images/double-up-not.png"; ?>  name = "sort" value="name_desc" width="10" height="10"/></div>
            <div><input type="image" src=<?php echo $sort=="name_asc" ? "images/double-down.png":"images/double-down-not.png"; ?> name = "sort" value="name_asc" width="10" height="10" /></div>
          </div>

          <h4> E-mail </h4>
          <div class="arrows-title-message">
            <div><input type="image" src=<?php echo $sort=="email_desc" ? "images/double-up.png":"images/double-up-not.png"; ?>  name = "sort" value="email_desc" width="10" height="10"/></div>
            <div><input type="image" src=<?php echo $sort=="email_asc" ? "images/double-down.png":"images/double-down-not.png"; ?> name = "sort" value="email_asc" width="10" height="10" /></div>
          </div>

          <h4> Дата добавления </h4>
          <div class="arrows-title-message">
            <div><input type="image" src=<?php echo $sort=="date_desc" ? "images/double-up.png":"images/double-up-not.png"; ?>  name = "sort" value="date_desc" width="10" height="10"/></div>
            <div><input type="image" src=<?php echo $sort=="date_asc" ? "images/double-down.png":"images/double-down-not.png"; ?> name = "sort" value="date_asc" width="10" height="10" /></div>
          </div>
        </div>
      </form>
     <? foreach($messages as message) :?>
        <div class="text-message">
          <div class="title-message"><? =$message['theme']; ?></div>
          <div class="title-message">
            <?=$message['name'];?>&nbsp;&brvbar;&nbsp;
            <?=$message['email'];?>&nbsp;&brvbar;&nbsp;
            <?=$message['date'];?>
          </div>
          <div>
            <p><? =$message[text]; ?></p>
            <p> <img src=" <?=$message['pictures']; ?> " alt=" <?=$message['pictures']; ?> ">
                &nbsp;&brvbar;&nbsp;
                <? =$message['filepatn']; ?>
            </p>
          </div>
        </div>
      <? endforeach; ?>

    </div>

    <!-- Подвал -->
    <div class="box footer">
      <h3>контакты: иван иванов +111 11 1111111</h3>
    </div>
  </div>

</body>
</html>
