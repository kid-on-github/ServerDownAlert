function main() {
    var urlsToCheck = ['lemonshell.com','hyper-lamp.com']
    var siteDownList = []
    
    for (var i in urlsToCheck){
      var url = "http://" + urlsToCheck[i]
      var request = UrlFetchApp.fetch(url,{muteHttpExceptions: true })
      var response = request.getResponseCode()
      
      // if not online, add to email
      if (response !== 200){
        siteDownList.push(url)
      }
    }
    
    // are any sites down?
    if (siteDownList.length > 0){
      var msg ='The following sites have gone offline: \n' + siteDownList.join('\n')
      Logger.log(msg)
      sendEmails(msg)
    }
  
    // send email notification
    function sendEmails(msg) {
      var emailAddress = 'mike@lemonshell.com'
      var emailPhone = '7122047392@vtext.com'
      var subject = 'Server Status'
      MailApp.sendEmail(emailAddress, subject, msg)
      MailApp.sendEmail(emailPhone, subject, msg)
    }
  
  }