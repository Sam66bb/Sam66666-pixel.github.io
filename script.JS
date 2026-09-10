// 14 個 SOP 預設資料集
const sopData = [
  {
    title: "1. 培養基配置",
    materials: "MRS Broth / LB Broth 藥粉、蒸餾水、瓊脂粉 (Agar)",
    equipment: "電子天平、燒杯, 磁力攪拌器、高壓滅菌瓶",
    steps: "1. 秤取指定劑量藥粉至燒杯。<br>2. 加入蒸餾水至 1000 mL 並充分攪拌。<br>3. 分裝至高壓滅菌瓶內並鎖緊（倒退半圈）。",
    notes: "滅菌前蓋子切勿鎖死，避免瓶內氣壓過高發生危險。"
  },
  {
    title: "2. 滅菌釜操作",
    materials: "待滅菌培養基、滅菌指示條",
    equipment: "高壓蒸氣滅菌釜 (Autoclave)",
    steps: "1. 檢查滅菌釜水位。<br>2. 放入待滅菌物品並關緊艙門。<br>3. 設定 121°C 滅菌 15-20 分鐘。<br>4. 待壓力歸零且溫度降至 60°C 以下方可開門。",
    notes: "高溫高壓操作需配戴防燙手套。"
  },
  {
    title: "3. 樣品等量稀釋",
    materials: "無菌生理鹽水 (0.85% NaCl)、菌液樣品",
    equipment: "微量微量吸管 (Pipette)、無菌微量試管 (Eppendorf)",
    steps: "1. 於無菌操作台內排列 9 個無菌試管，各加入 900 μL 生理鹽水。<br>2. 取 100 μL 原始菌液至第一管，混勻（10⁻¹ 稀釋）。<br>3. 依序進行倍率稀釋至 10⁻⁹。",
    notes: "每次吸取液體後務必更換槍頭 (Tip)。"
  }
  // 提示：其餘 4~14 主題可依照相同格式擴充於此
];

// 頁面切換 logic
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// 載入 SOP 內容
function loadSop(index) {
  const data = sopData[index] || {
    title: "主題資料建設中",
    materials: "尚未建立內容",
    equipment: "尚未建立內容",
    steps: "可自行於 script.js 的 sopData 中擴充此主題步驟。",
    notes: "無"
  };

  document.getElementById('sop-title').innerText = data.title;
  document.getElementById('sop-materials').innerText = data.materials;
  document.getElementById('sop-equipment').innerText = data.equipment;
  document.getElementById('sop-steps').innerHTML = data.steps;
  document.getElementById('sop-notes').innerText = data.notes;

  // 更新左側選單高亮
  const menuItems = document.querySelectorAll('#sop-menu li');
  menuItems.forEach(item => item.classList.remove('active'));
  if (menuItems[index]) menuItems[index].classList.add('active');
}

// 實驗紀錄功能
function addLog(e) {
  e.preventDefault();
  const date = document.getElementById('log-date').value;
  const action = document.getElementById('log-action').value;
  const result = document.getElementById('log-result').value;
  const advisor = document.getElementById('log-advisor').value;
  const improvement = document.getElementById('log-improvement').value;

  const logList = document.getElementById('log-list');
  const logHtml = `
    <div class="log-item">
      <h4>📅 ${date} - ${action}</h4>
      <p><strong>實驗結果：</strong> ${result}</p>
      ${advisor ? `<p><strong>💡 老師建議：</strong> ${advisor}</p>` : ''}
      ${improvement ? `<p><strong>🛠️ 改良建議：</strong> ${improvement}</p>` : ''}
    </div>
  `;
  logList.insertAdjacentHTML('afterbegin', logHtml);
  e.target.reset();
}

// 待辦事項功能
function addTodo() {
  const input = document.getElementById('todo-input');
  if (!input.value.trim()) return;
  
  const ul = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.innerHTML = `<span>${input.value}</span> <button onclick="this.parentElement.remove()" style="color:red;border:none;background:none;cursor:pointer;">❌</button>`;
  ul.appendChild(li);
  input.value = '';
}

// 備忘錄自動儲存至 LocalStorage
function saveMemo() {
  localStorage.setItem('lab_memo', document.getElementById('memo-input').value);
}

// 初始化執行
window.onload = function() {
  loadSop(0);
  const savedMemo = localStorage.getItem('lab_memo');
  if (savedMemo) document.getElementById('memo-input').value = savedMemo;
};