define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      this.events = [{
        id: 1,
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        lat: 51.090209,
        lng: 6.585863,
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        city: 'Straußfurt',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.163893,
        lng: 10.986114,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        city: 'Gebesee',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.114004,
        lng: 10.933228,
        wheelchair: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        city: 'Schwabhausen',
        district: 'Erfurt',
        street: 'Frühlingsstraße',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 48.302842,
        lng: 11.352900,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 6,
        city: 'Hachelbich',
        district: 'Kyffhäuserland',
        street: 'Oberdorf',
        number: '10',
        zip: '99707',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 51.344143,
        lng: 10.966972,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 7,
        city: 'Berka',
        district: 'Sondershausen',
        street: 'Wittchental',
        number: '10',
        zip: '99706',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        lat: 50.941998,
        lng: 10.073971,
        satTrans: true,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 8,
        city: 'Roßla',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.463053,
        lng: 11.069677,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 9,
        city: 'Kelbra',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.434340,
        lng: 11.101727,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        city: 'Tilleda',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.418927,
        lng: 11.143613,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 11,
        city: 'Neuss',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.204197,
        lng: 6.687951,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 12,
        city: 'Krefeld',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.333347,
        lng: 6.584587,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 13,
        city: 'Kempen',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.361224,
        lng: 6.428719,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 14,
        city: 'Mühlheim an der Ruhr',
        district: 'Duisburg',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 51.421209,
        lng: 6.882591,
        wheelchair: true,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 15,
        city: 'Kreuzberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.497492,
        lng: 13.395252,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 16,
        city: 'Charlottenburg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.515881,
        lng: 13.295689,
        wheelchair: true,
        wheelchairLift: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 17,
        city: 'Schöneberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.480977,
        lng: 13.369846,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 18,
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        lat: 52.549506,
        lng: 13.555241,
        wheelchair: true,
        satTrans: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }];

      this.pages = [{
        alias: 'impress',
        content: '',
        title: 'Impress'
      }, {
        alias: 'contact',
        content: '',
        title: 'Contact'
      }];
    }
  ]);
});
