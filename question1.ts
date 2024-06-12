class MailSender{
  send = (from, :string, to: string):void => {
    console.log(`${from}から${to}へメールを送信します。`)
  }
}

const mail_sender = new MailSender()
mail_sender.send('秋山', '真田')