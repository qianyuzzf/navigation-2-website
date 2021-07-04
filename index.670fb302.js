(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastList = $('.lastList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('x');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: 'https://www.timtadder.com/favicon.ico',
    url: 'https://www.timtadder.com'
  }, {
    logo: 'https://qianduan.net/favicon.ico',
    url: 'https://qianduan.net'
  }, {
    logo: 'https://codepen.io/favicon.ico',
    url: 'https://codepen.io'
  }, {
    logo: 'https://github.com/favicon.ico',
    url: 'https://github.com'
  }, {
    logo: 'https://www.quanjing.com/favicon.ico',
    url: 'https://www.quanjing.com'
  }, {
    logo: 'https://iconfever.com/favicon.ico',
    url: 'https://iconfever.com'
  }, {
    logo: 'https://www.bilibili.com/favicon.ico',
    url: 'https://www.bilibili.com'
  }, {
    logo: 'https://www.baidu.com/favicon.ico',
    url: 'https://www.baidu.com'
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = url => {
    return url.replace('http://', '').replace('https://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.lastList)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index) => {
      let $li = $(`
      <li>
        <div class="site">
          <div class="logo">
            <img src=${$16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[index].logo} alt="">
          </div>
          <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>
          <div class="close">
            <svg class = "icon">
              <use xlink:href = "#icon-Close"></use>
            </svg>
          </div>
        </div>
      </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastList);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
        const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
        localStorage.setItem('x', string);
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt(`请问你要添加的网址是什么？`);
    if (url.indexOf('http') === -1) {
      url = 'https://' + url;
    }
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: url + '/favicon.ico',
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('x', string);
  });
})();

//# sourceMappingURL=index.670fb302.js.map
