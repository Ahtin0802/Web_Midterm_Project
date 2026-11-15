// 工具一：餐費預算計算機
const calcBtn = document.getElementById('calcBtn');
const budgetResult = document.getElementById('budgetResult');

if (calcBtn) {
  calcBtn.addEventListener('click', function () {
    const money = parseFloat(document.getElementById('moneyInput').value);
    const days = parseFloat(document.getElementById('daysInput').value);

    if (isNaN(money) || isNaN(days) || days <= 0 || money < 0) {
      budgetResult.textContent = '請輸入有效的金額與大於 0 的天數！';
      budgetResult.style.color = '#d90429';
      return;
    }

    const perMeal = Math.floor(money / (days * 3));
    let statusText = '';

    if (perMeal >= 150) {
      statusText = '財富自由狀態！每餐還可以加點飲料或小菜。';
      budgetResult.style.color = '#2b9348';
    } else if (perMeal >= 70) {
      statusText = '穩健生存狀態！學校自助餐與便當是你的好朋友。';
      budgetResult.style.color = '#e07a5f';
    } else {
      statusText = '極限求生警報！建議鎖定超商即期品與吐司。';
      budgetResult.style.color = '#d90429';
    }

    budgetResult.textContent = '平均每餐預算：' + perMeal + ' 元 —— ' + statusText;
  });
}

// 工具二：大學生存屬性測驗
const quizButtons = document.querySelectorAll('.quiz-btn');
const quizResultBox = document.getElementById('quizResultBox');
const quizTitle = document.getElementById('quizTitle');
const quizDesc = document.getElementById('quizDesc');

quizButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const choice = button.getAttribute('data-type');
    quizResultBox.style.display = 'block';

    if (choice === 'club') {
      quizTitle.textContent = '測驗結果：熱血社團社交王';
      quizDesc.textContent = '大學生活就是要充滿活動與夥伴！記得在忙社團與表演之餘，也要顧好期中考喔！';
    } else if (choice === 'study') {
      quizTitle.textContent = '測驗結果：自律卷王潛力股';
      quizDesc.textContent = '連放假都在衝刺進度，書卷獎離你不遠了，偶爾也別忘了出門透透氣！';
    } else if (choice === 'sleep') {
      quizTitle.textContent = '測驗結果：高效節能休眠大師';
      quizDesc.textContent = '懂得在忙碌的課業中幫自己充電，睡飽了才有體力面對下週的早八！';
    }
  });
});