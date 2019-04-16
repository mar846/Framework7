// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'UTS-ISA', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ],
      location:[
        {
          id:'1',
          name:'Dukuh Pakis'
        },
        {
          id:'2',
          name:'Dukuh Kupang'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
//Register Screen
$$('#register-screen .register-button').on('click',function(){
  var email = $$('#register-screen [name="email"]').val();
  var username = $$('#register-screen [name="username"]').val();
  var password = $$('#register-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#register-screen');

  // Alert username and password
  app.dialog.alert('Email: ' + email + '<br>Username: ' + username + '<br>Password: ' + password);
});

//order popup
// Open dynamic popup
$$('.order-popup').on('click', function () {
  orderPopup.open();
});
var orderPopup = app.popup.create({
  content: '<div class="popup" id="order-popup"><div class="view"><div class="page"><div class="navbar"><div class="navbar-inner"><div class="left"><a href="#" class="link popup-close"><i class="icon icon-back"></i></a></div><div class="title">Order</div></div></div><!-- Page Content --><div class="page-content"><div class="block-title">Pesan {{product.title}}</div><div class="block"><div class="list no-hairlines-md"><ul><li class="item-content item-input"><div class="item-inner"><div class="item-title item-label">Dari</div><div class="item-input-wrap"><input type="text" placeholder="Dari" readonly="readonly" id="from-picker"/></div></div></li><li class="item-content item-input"><div class="item-inner"><div class="item-title item-label">Ke</div><div class="item-input-wrap"><input type="text" placeholder="Tujuan" readonly="readonly" id="to-picker"/></div></div></li></ul></div></div><div class="block-title">Harga</div><div class="block block-strong inset"><h4 id="harga">Rp. 100.000</h4></div><div class="block"><button type="button" name="button" class="button button-round button-fill button-large color-orange" id="pesan">Pesan</button></div></div></div></div></div>',
  // Events
  on: {
    open: function(data) {
      //insert picker data from & to value
      var pickerFrom = app.picker.create({
        inputEl: '#from-picker',
        cols: [
          {
            textAlign: 'center',
            values: ['Dukuh Pakis','Dukuh Kupang']
          }
        ]
      });
      var pickerTo = app.picker.create({
        inputEl: '#to-picker',
        cols: [
          {
            textAlign: 'center',
            values: ['Dukuh Pakis','Dukuh Kupang']
          }
        ]
      });
    },
    opened: function(data) {
      $$("#order-popup #pesan").on('click',function() {
        var from = $$('#order-popup #from-picker').val();
        var to = $$('#order-popup #to-picker').val();
        // app.dialog.alert('Sampean atene nang ' + to + ' teko ' + from);
        redirect: '/catalog/';
        orderPopup.close();
        app.views.main.router.navigate('#view-catalog');
      });
    }
  }
});
