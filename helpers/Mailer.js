const sendGrid = require('sendgrid');
const sdGrid = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends sdGrid.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.sgApi = sendGrid(keys.sendGridKey);
    this.from_email = new sdGrid.Email('no-reply@webdev.com');
    this.subject = subject;
    this.body = new sdGrid.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.clickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new sdGrid.Mail(email);
    });
  }
  clickTracking() {
    const trackSettings = new sdGrid.TrackingSettings();
    const clickSettings = new sdGrid.ClickTracking(true, true);

    trackSettings.setClickTracking(clickSettings);
    this.addTrackingSettings(trackSettings);
  }

  addRecipients() {
    const personalize = new sdGrid.Personalization();

    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  send = async () => {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON(),
    });
    const response = await this.sgApi.API(request);
    return response;
  };
}

module.exports = Mailer;
