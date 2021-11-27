const sampleCollection = [
  {
    title: 'كتابة',
    showCode: false,
    code: `<span class="nes-text is-primary">ابتدائي</span>
<span class="nes-text is-success">نجاح</span>
<span class="nes-text is-warning">تحذير</span>
<span class="nes-text is-error">خطأ</span>
<span class="nes-text is-disabled">معطّل</span>`,
  },
  {
    title: 'أزرار',
    showCode: false,
    code: `<a class="nes-btn" href="#">طبيعي</a>

<button type="button" class="nes-btn is-primary">أولي</button>
<button type="button" class="nes-btn is-success">نجاح</button>
<button type="button" class="nes-btn is-warning">تحذير</button>
<button type="button" class="nes-btn is-error">خطأ</button>
<button type="button" class="nes-btn is-disabled">معطّل</button>

<label class="nes-btn">
  <span>إختر ملف</span>
  <input type="file">
</label>`,
  },
  {
    title: 'زر راديو',
    showCode: false,
    code: `<div class="nes-radio-container">
  <label>
    <input type="radio" class="nes-radio" name="answer" />
    <span class="radio-answer negative-answer">لا</span>
  </label>

  <label>
  <input type="radio" class="nes-radio" name="answer" checked />
  <span class="radio-answer">نعم</span>
</label>
</div>
<div class="nes-radio-container" style="background-color:#212529;">
<label>
<input type="radio" class="nes-radio is-dark" name="answer-dark" />
<span class="radio-answer negative-answer" >لا</span>
</label>  

<label>
    <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
    <span>نعم</span>
  </label>
</div>`,
  },
  {
    title: 'مربع اختيار',
    showCode: false,
    code: `<div class="nes-check-container">
  <label>
  <input type="checkbox" class="nes-checkbox" checked />
  <span>مفعّل</span>
</label>
</div>
<div  class="nes-check-container" style="background-color:#212529;">
  <label>
    <input type="checkbox" class="nes-checkbox is-dark" checked />
    <span>غامق</span>
  </label>
</div>`,
  },
  {
    title: 'إدخال',
    showCode: false,
    code: `<div class="nes-field">
  <label for="name_field">إسمك</label>
  <input type="text" id="name_field" class="nes-input">
</div>

<div class="nes-field is-inline">
  <label for="inline_field">.input.is-success</label>
  <input type="text" id="inline_field" class="nes-input is-success" placeholder="أدخل النص هنا">
</div>

<div class="nes-field is-inline">
  <label for="warning_field">.input.is-warning</label>
  <input type="text" id="warning_field" class="nes-input is-warning" placeholder="أدخل النص هنا">
  </div>

<div class="nes-field is-inline">
  <label for="error_field">.input.is-error</label>
  <input type="text" id="error_field" class="nes-input is-error" placeholder="أدخل النص هنا">
  </div>

<div style="background-color:#212529; padding: 1rem;" class="nes-field is-inline">
  <label for="dark_field" style="color:#fff;">.input.is-dark</label>
  <input type="text" id="dark_field" class="nes-input is-dark" placeholder="ادخل النص هنا">
</div>`,
  },
  {
    title: 'منطقة النص ',
    showCode: false,
    code: `<label for="textarea_field">منطقة النص </label>
<textarea id="textarea_field" class="nes-textarea"></textarea>`,
  },
  {
    title: 'قوائم إختيار',
    showCode: false,
    code: `<label for="default_select">اختيار تلقائي</label>
<div class="nes-select">
  <select required id="default_select" dir="rtl">
    <option value="" disabled selected hidden>إختيار...</option>
    <option value="0">يكون</option>
    <option value="1">لا يكون</option>
  </select>
</div>

<label for="success_select">nes-select.is-success</label>
<div class="nes-select is-success">
  <select required id="success_select" dir="rtl">
    <option value="" disabled selected hidden>إختيار...</option>
    <option value="0">يكون</option>
    <option value="1">لا يكون</option>
  </select>
</div>

<label for="warning_select">nes-select.is-warning</label>
<div class="nes-select is-warning">
  <select required id="warning_select" dir="rtl">
  <option value="" disabled selected hidden>إختيار...</option>
    <option value="0">يكون</option>
    <option value="1">لا يكون</option>
  </select>
</div>

<label for="error_select">nes-select.is-error</label>
<div class="nes-select is-error">
  <select required id="error_select" dir="rtl">
  <option value="" disabled selected hidden>إختيار...</option>
    <option value="0">يكون</option>
    <option value="1">لا يكون</option>
  </select>
</div>

<div style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
  <label for="dark_select" style="color:#fff">nes-select.is-dark</label>
  <div class="nes-select is-dark">
    <select required id="dark_select" dir="rtl">
    <option value="" disabled selected hidden>إختيار...</option>
      <option value="0">يكون</option>
      <option value="1">لا يكون</option>
    </select>
  </div>
</div>`,
  },
  {
    title: 'حاويات',
    showCode: false,
    code: `<div class="nes-container with-title is-centered">
  <p class="title">Container.is-centered</p>
  <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
</div>

<div class="nes-container with-title is-centered is-dark">
  <p class="title">Container.is-dark</p>
  <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
</div>

<div class="nes-container is-rounded">
  <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
</div>

<div class="nes-container is-rounded is-dark">
  <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
</div>`,
  },
  {
    title: 'حوار',
    note:
      'pollyfill اي جافاسكربت. اذا اردت استخدام عنصر حوار غير كروم فإنك بحاجة إلى استخدام  NES.css لا يتضمن',
    showCode: false,
    code: `<!-- Dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-default').showModal();">
    افتح مربع حوار
  </button>
  <dialog class="nes-dialog" id="dialog-default">
    <form method="dialog">
      <p class="title">حوار</p>
      <p>تحذير: هذا مربع حوار</p>
      <menu class="dialog-menu">
        <button class="nes-btn">إلغاء</button>
        <button class="nes-btn is-primary">تأكيد</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-dark').showModal();">
    إفتح مربع حوار غامق
  </button>
  <dialog class="nes-dialog is-dark" id="dialog-dark">
    <form method="dialog">
      <p class="title">مربع حوار غامق</p>
      <p>تحذير: هذا مربع حوار</p>
      <menu class="dialog-menu">
        <button class="nes-btn">إلغاء</button>
        <button class="nes-btn is-primary">تأكيد</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Rounded dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
    إفتح مربع حوار مستدير
  </button>
  <dialog class="nes-dialog is-rounded" id="dialog-rounded">
    <form method="dialog">
      <p class="title">مربع حوار مستدير</p>
      <p>تحذير: هذا مربع حوار</p>
      <menu class="dialog-menu">
        <button class="nes-btn">إلغاء</button>
        <button class="nes-btn is-primary">تأكيد</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark and Rounded dialog -->
<section>
  <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-dark-rounded').showModal();">
    إفتح مربع حوار غامق و مستدير
  </button>
  <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
    <form method="dialog">
      <p class="title">مربع حوار غامق و مستدير</p>
      <p>تحذير: هذا مربع حوار</p>
      <menu class="dialog-menu">
        <button class="nes-btn">إلغاء</button>
        <button class="nes-btn is-primary">تأكيد</button>
      </menu>
    </form>
  </dialog>
</section>`,
  },
  {
    title: 'قوائم',
    showCode: false,
    code: `<div class="lists">
  <ul class="nes-list is-disc">
    <li>صباح الخير</li>
    <li>أتمنى أن تكون قد حظيت بليلة سعيدة</li>
    <li>مساء الخير</li>
    <li>تصبح على خير</li>
  </ul>
</div>

<div class="lists">
  <ul class="nes-list is-circle">
  <li>صباح الخير</li>
  <li>أتمنى أن تكون قد حظيت بليلة سعيدة</li>
  <li>مساء الخير</li>
  <li>تصبح على خير</li>
  </ul>
</div>

<section class="nes-container is-dark">
  <div class="lists">
    <ul class="nes-list is-disc is-dark">
    <li>صباح الخير</li>
    <li>أتمنى أن تكون قد حظيت بليلة سعيدة</li>
    <li>مساء الخير</li>
    <li>تصبح على خير</li>
    </ul>
  </div>

  <div class="lists">
    <ul class="nes-list is-circle is-dark">
    <li>صباح الخير</li>
    <li>أتمنى أن تكون قد حظيت بليلة سعيدة</li>
    <li>مساء الخير</li>
    <li>تصبح على خير</li>
    </ul>
  </div>
</section>`,
  },
  {
    title: 'جداول',
    showCode: false,
    code: `<div class="nes-table-responsive">
  <table class="nes-table is-bordered is-centered">
    <thead>
      <tr>
        <th>Table.is-bordered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>صباح الخير </td>
        <td>مساء الخير</td>
        <td>ليلة سعيدة</td>
        <td>تصبح على خير</td>
      </tr>
      <tr>
      <td>صباح الخير </td>
      <td>مساء الخير</td>
      <td>ليلة سعيدة</td>
      <td>تصبح على خير</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="nes-table-responsive">
  <table class="nes-table is-bordered is-dark">
    <thead>
      <tr>
        <th>Table.is-dark</th>
        <th>Table.is-bordered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>صباح الخير </td>
      <td>مساء الخير</td>
      </tr>
      <tr>
        <td>ليلة سعيدة</td>
        <td>تصبح على خير</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    title: 'تقدّم',
    showCode: false,
    code: `<progress class="nes-progress" value="90" max="100"></progress>
<progress class="nes-progress is-primary" value="80" max="100"></progress>
<progress class="nes-progress is-success" value="50" max="100"></progress>
<progress class="nes-progress is-warning" value="30" max="100"></progress>
<progress class="nes-progress is-error" value="10" max="100"></progress>
<progress class="nes-progress is-pattern" value="50" max="100"></progress>`,
  },
  {
    title: 'افاتار',
    description: '"is-pixelated" يوصى باستخدام الكلاس ',
    showCode: false,
    code: `<img class="nes-avatar is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">

<img class="nes-avatar is-small is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">
<img class="nes-avatar is-medium is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">
<img class="nes-avatar is-large is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">


<img class="nes-avatar is-rounded is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">

<img class="nes-avatar is-rounded is-small is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">
<img class="nes-avatar is-rounded is-medium is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">
<img class="nes-avatar is-rounded is-large is-pixelated" alt="Gravatar مثال على صورة" src="https://www.gravatar.com/avatar?s=15">`,
  },
  {
    title: 'بالونات',
    showCode: false,
    code: `<section class="nes-container">
  <section class="message-list">
    <section class="message -left">
      <i class="nes-bcrikko"></i>
      <!-- Balloon -->
      <div class="nes-balloon from-left">
        <p>NES.css مرحبا</p>
      </div>
    </section>

    <section class="message -right">
      <!-- Balloon -->
      <div class="nes-balloon from-right">
        <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
      </div>
      <i class="nes-bcrikko"></i>
    </section>
  </section>
</section>

<!-- Balloon 'is-dark'  -->
<section class="nes-container is-dark">
  <section class="message-list">
      <section class="message -left">
        <i class="nes-bcrikko"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left is-dark">
          <p>NES.css مرحبا</p>
        </div>
      </section>

      <section class="message -right">
        <!-- Balloon -->
        <div class="nes-balloon from-right is-dark">
          <p>صباح الخير. أتمنى أن تكون قد نمت جيدًا</p>
        </div>
        <i class="nes-bcrikko"></i>
      </section>
    </section>
  </section>
</section>`,
  },
  {
    title: 'المؤشر',
    showCode: false,
    code: `<p class="nes-balloon from-right nes-pointer">
    هذا ليس عنصرًا قابلاً للنقر ، ولكنه منطقة تأشير.
</p>`,
  },
  {
    title: 'شارات',
    showCode: false,
    code: `<a href="#" class="nes-badge">
  <span class="is-dark">نيس.سي اس اس</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-primary">إطار</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-success">هو</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-warning">إطار</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-error">أروع</span>
</a>

<a href="#" class="nes-badge is-split">
  <span class="is-dark">npm</span>
  <span class="is-primary">1.1.0</span>
</a>

<a href="#" class="nes-badge is-split">
  <span class="is-dark">إختبار</span>
  <span class="is-success">100%</span>
</a>

<a href="#" class="nes-badge is-icon">
  <span class="is-warning"><i class="nes-icon star is-small"></i></span>
  <span class="is-primary">ايقونات</span>
</a>

<a href="#" class="nes-badge is-icon">
  <span class="is-dark">مرحبا</span>
  <span class="is-warning">كتابة</span>
</a>`,
  },
  {
    title: 'إيقونات تفاعلية',
    showCode: false,
    description:
      '"is-small", "is-medium" and "is-large"إذا كنت تريد تغيير حجم الإيقونة ، يرجى استخدام',
    code: `<section class="icon-list">
  <!-- heart -->
  <i class="nes-icon is-large heart"></i>
  <i class="nes-icon is-large is-half heart"></i>
  <i class="nes-icon is-large is-transparent heart"></i>
  <i class="nes-icon is-large heart is-empty"></i>

  <!-- star -->
  <i class="nes-icon is-large star"></i>
  <i class="nes-icon is-large star is-half"></i>
  <i class="nes-icon is-large star is-transparent"></i>
  <i class="nes-icon is-large star is-empty"></i>

  <!-- like -->
  <i class="nes-icon is-large like"></i>
  <i class="nes-icon is-large like is-empty"></i>
</section>`,
  },
  {
    title: 'SNS رموز',
    showCode: false,
    description:
      '"is-small", "is-medium" and "is-large"إذا كنت تريد تغيير حجم الإيقونة ، يرجى استخدام',
    code: `<section class="icon-list">
  <!-- twitter -->
  <i class="nes-icon twitter is-large"></i>

  <!-- facebook -->
  <i class="nes-icon facebook is-large"></i>

  <!-- instagram -->
  <i class="nes-icon instagram is-large"></i>

  <!-- github -->
  <i class="nes-icon github is-large"></i>

  <!-- google -->
  <i class="nes-icon google is-large"></i>

  <!-- gmail -->
  <i class="nes-icon gmail is-large"></i>

  <!-- medium -->
  <i class="nes-icon medium is-large"></i>

  <!-- linkedin -->
  <i class="nes-icon linkedin is-large"></i>

  <!-- twitch -->
  <i class="nes-icon twitch is-large"></i>

  <!-- youtube -->
  <i class="nes-icon youtube is-large"></i>

  <!-- reddit -->
  <i class="nes-icon reddit is-large"></i>

  <!-- whatsapp -->
  <i class="nes-icon whatsapp is-large"></i>
</section>`,
  },
  {
    title: 'إيقونات اخرى',
    showCode: false,
    description:
    '"is-small", "is-medium" and "is-large"إذا كنت تريد تغيير حجم الإيقونة ، يرجى استخدام',
    code: `<section class="icon-list">
  <!-- close -->
  <i class="nes-icon close is-large"></i>

  <!-- trophy -->
  <i class="nes-icon trophy is-large"></i>

  <!-- coin -->
  <i class="nes-icon coin is-large"></i>
</section>`,
  },
  {
    title: 'بيكسل-ارت',
    showCode: false,
    code: `<section class="icon-list">
  <!-- controllers -->
  <i class="nes-logo"></i>
  <i class="nes-jp-logo"></i>
  <i class="snes-logo"></i>
  <i class="snes-jp-logo"></i>

  <!-- octocat -->
  <i class="nes-octocat animate"></i>

  <!-- phone -->
  <i class="nes-smartphone"></i>
  <i class="nes-phone"></i>
</section>`,
  },
  {
    title: 'شخصيات نينتندو',
    showCode: false,
    note:
      'تمتلك نينتيندو حقوق الطبع والنشر لهذه الشخصيات. يرجى الامتثال لإرشادات نينتيندو وقوانين السلطة القضائية المعمول بها',
    code: `<section class="icon-list">
  <!-- Copyright Nintendo -->
  <i class="nes-mario"></i>
  <i class="nes-ash"></i>
  <i class="nes-pokeball"></i>
  <i class="nes-bulbasaur"></i>
  <i class="nes-charmander"></i>
  <i class="nes-squirtle"></i>
  <i class="nes-kirby"></i>
</section>`,
  },
];

const coreteam = [
  {
    name: 'B.C.Rikko',
    feat: 'Creator of NES.css',
    github: 'BcRikko',
    twitter: 'bc_rikko',
  },
  {
    name: 'Igor Guastalla',
    feat: 'Development support',
    github: 'guastallaigor',
    twitter: 'guastallaigor',
  },
];

const emeriti = [
  {
    name: 'Trezy',
    feat: 'Setup DevOps',
    github: 'trezy',
    twitter: 'TrezyCodes',
  },
  {
    name: 'Abdullah Samman',
    feat: 'Setup test suite',
    github: 'evexoio',
  },
];

// curl -s 'https://api.github.com/repos/nostalgic-css/NES.css/contributors?per_page=100' | jq '.[].login'
const contributors = [
  '4k1k0',
  'sombreroEnPuntas',
  'Divoolej',
  'soph-iest',
  'montezume',
  'sazzadsazib',
  'HiKaylum',
  'jdvivar',
  'ohlookitsderpy',
  'IngwiePhoenix',
  'kyu-suke',
  'jjspace',
  'Baldomo',
  'DanSnow',
  'ernestomancebo',
  'Ilyeo',
  'Kartones',
  'rrj-dev',
  'vicainelli',
  'stewartrule',
  'kenshinji',
  'youngkaneda',
  'Takumi0901',
  'loo41',
  'alexd99',
  'alexgleason',
  'agarzola',
  'AlphaWong',
  'brendansparrow',
  'Ermakoy',
  'fleeting',
  'JamesIves',
  'jsoref',
  'KOREAN139',
  'KalobTaulien',
  'LukBukkit',
  'otaviopace',
  'Pedro-Souza',
  'iamrameffort',
  'scottaohara',
  'd0p1s4m4',
  'lucasjs',
  'musavvirahmed',
  'sinofp',
  'thisisabhinay',
  'tnantoka',
];

new Vue({
  el: '#nescss',
  data() {
    return {
      collection: sampleCollection,
      coreteam,
      emeriti,
      contributors,
      animateOctocat: false,
      copiedBalloon: {
        display: 'none',
        top: 0,
        left: 0,
      },
      scrollPos: 0,
    };
  },
  filters: {
    capitalize(val) {
      if (!val) return '';
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });
    hljs.initHighlightingOnLoad();
    [].forEach.call(document.querySelectorAll('dialog'), (a) => {
      dialogPolyfill.registerDialog(a);
    });
    this.replaceImages();
  },
  methods: {
    copy(event, id) {
      this.showCopiedBalloon(event.pageY, event.pageX);

      const fake = document.createElement('textarea');
      fake.value = this.collection.find(a => a.title === id).code;
      fake.setAttribute('readonly', '');
      Object.assign(fake.style, {
        position: 'absolute',
        left: '-9999px',
      });
      this.$el.appendChild(fake);
      fake.select();
      document.execCommand('copy');
      this.$el.removeChild(fake);
    },
    startAnimate() {
      this.animateOctocat = true;
    },
    stopAnimate() {
      this.animateOctocat = false;
    },
    showCopiedBalloon(top, left) {
      this.copiedBalloon = {
        display: 'block',
        top: `${top - 100}px`,
        left: `${left - 180}px`,
      };
      setTimeout(() => {
        this.copiedBalloon.display = 'none';
      }, 1000);
    },
    replaceImages() {
      Array.from(document.querySelectorAll('img.lazy')).forEach((img) => {
        img.onload = () => img.classList.remove('lazy');
        img.src = img.dataset.src;
      });
    },
  },
});
