// SOP 資料庫
const sopData = {
  1: {
    title: "1. 培養基配置",
    materials: "LB Broth / Agar 綠粉、蒸餾水 (ddH2O)、高壓滅菌袋",
    equipment: "電子天平、燒杯、磁力攪拌器、高壓滅菌釜",
    procedure: "1. 秤取適量 LB 培養基粉末倒入燒杯。\n2. 加入定量的蒸餾水，並使用磁力攪拌器攪拌至完全溶解。\n3. 分裝至滅菌瓶中，鎖緊蓋子後回旋半圈。\n4. 貼上高壓滅菌指示膠帶，放入高壓滅菌釜進行滅菌。",
    notes: "滅菌完成後請佩戴防燙手套取出手搖均勻，冷卻至約 50°C 再進行倒盤作業。"
  },
  2: {
    title: "2. 滅菌釜操作",
    materials: "待滅菌物品、高壓滅菌測試膠帶",
    equipment: "高壓滅菌釜 (Autoclave)",
    procedure: "1. 檢查滅菌釜水位是否足夠。\n2. 將物品放入滅菌籠，確認蓋子緊閉與排水閥關閉。\n3. 設定 121°C 滅菌 15~20 分鐘。\n4. 滅菌完畢待壓力歸零、溫度降至 80°C 以下方可開蓋。",
    notes: "高壓高溫操作請務必全程配戴防燙手套與防護面罩。"
  },
  3: {
    title: "3. 樣品等量稀釋",
    materials: "無菌 PBS / 滅菌水、微量微管 (Eppendorf)",
    equipment: "微量吸管 (Pipette)、漩渦混合器 (Vortex)",
    procedure: "1. 取 900 μL 稀釋液加入各管中。\n2. 加入 100 μL 原始菌液至第一管，充份漩渦震盪混合（10^-1 稀釋）。\n3. 從第一管吸取 100 μL 至第二管，重複做連續十倍梯度稀釋。",
    notes: "每次吸取前請更換槍頭，確保稀釋準確度。"
  },
  4: {
    title: "4. 分離純化培養細菌",
    materials: "LB 瓊脂平板、待測菌液",
    equipment: "接種環 / 滅菌塗布棒、酒精燈",
    procedure: "1. 無菌操作台內點燃酒精燈。\n2. 灼燒接種環至發紅，冷卻後取少許菌液。\n3. 在 LB 平板上進行劃線塗布（四區劃線法）。\n4. 倒置放入 37°C 培養箱培養 16-18 小時。",
    notes: "劃線時力道適中，避免劃破培養基表面。"
  },
  5: {
    title: "5. 菌染色辨別及顯微鏡",
    materials: "革蘭氏染色試劑組 (結晶紫、碘液、脫色酒精、複染劑)",
    equipment: "光學顯微鏡、載玻片、蓋玻片、酒精燈",
    procedure: "1. 玻片滴水抹菌，加熱固定。\n2. 滴加結晶紫 1 min ➔ 水洗 ➔ 滴加碘液 1 min ➔ 水洗。\n3. 脫色酒精脫色 10-15s ➔ 水洗 ➔ 滴加複染劑 1 min ➔ 水洗乾燥。\n4. 使用油鏡 (100x) 觀察菌體形態與紫/粉顏色差異。",
    notes: "脫色時間過長易導致革蘭氏陽性菌假陰性。"
  },
  6: {
    title: "6. 凍管液/凍管/離心機",
    materials: "甘油保護液 (Glycerol)、滅菌冷凍管",
    equipment: "高速冷凍離心機、-80°C 超低溫冷凍櫃",
    procedure: "1. 離心收集對數生長期的菌體。\n2. 加入含 15-20% 甘油之培養基均勻懸浮。\n3. 分裝至冷凍管，標明菌株名稱與日期。\n4. 先置於 -20°C 預冷後轉入 -80°C 長期保存。",
    notes: "冷凍管需使用耐低溫材質標籤紙進行標記。"
  },
  7: {
    title: "7. PCR 操作配置",
    materials: "2x PCR Master Mix、前/後引子 (Primers)、模板 DNA、dNTPS",
    equipment: "PCR 聚合酶鏈鎖反應儀、微量微管",
    procedure: "1. 在冰上配置 PCR 反應混合液。\n2. 依序加入 水、Master Mix、Primers、Template DNA。\n3. 輕微離心沉降液體後放入 PCR 儀。\n4. 設定熱循環條件：變性 95°C ➔ 黏合 55°C ➔ 延伸 72°C (30 cycles)。",
    notes: "PCR 配置全程需在乾淨環境或無菌台進行，避免外源 DNA 污染。"
  },
  8: {
    title: "8. 細菌活性測試",
    materials: "指示菌平板、細菌素粗抽液",
    equipment: "打孔器 / 濾紙片、培養箱、游標卡尺",
    procedure: "1. 將指示菌均勻塗布於 LB 平板。\n2. 使用打孔器於平板打孔，或放置無菌濾紙片。\n3. 滴加 20-50 μL 待測細菌素粗抽液。\n4. 靜置擴散後放入培養箱培養，測量透明抑菌圈直徑。",
    notes: "陰性對照組需加入等量緩衝液。"
  },
  9: {
    title: "9. 電泳及配膠",
    materials: "Agarose 瓊脂粉、1X TAE Buffer、核酸染劑、Loading Dye",
    equipment: "瓊脂凝膠電泳槽、直流電源供應器、紫外光顯像儀",
    procedure: "1. 秤取 1.5% Agarose 加至 1X TAE 加熱溶解。\n2. 稍微冷卻後加入核酸染劑，倒入膠模插上梳子。\n3. 凝固後放入電泳槽，加入 DNA 樣品與 Dye。\n4. 設 100V 電泳 30-45 min，最後至 UV 燈下照相紀錄。",
    notes: "核酸染劑具有潛在致癌性，請配戴手套操作。"
  },
  10: {
    title: "10. 找尋最適培養基",
    materials: "不同碳源/氮源/pH 值之培養基",
    equipment: "分光光度計 (OD600)、震盪培養箱",
    procedure: "1. 配置不同梯度或成分之培養基。\n2. 接種等量菌液於各組試管。\n3. 定時取樣測量 OD600 菌體濃度。\n4. 繪製生長曲線圖比較最佳生長條件。",
    notes: "測量 OD600 前請以未接種培養基歸零。"
  },
  11: {
    title: "11. FPLC 操作",
    materials: "陽/陰離子交換管柱、洗脫緩衝液 (Buffer A/B)",
    equipment: "FPLC 蛋白質純化系統 (Fast Protein Liquid Chromatography)",
    procedure: "1. Buffer 過濾並超音波脫氣。\n2. 平衡管柱 (Equilibration)。\n3. 上樣 (Sample Injection) 重新清洗管柱。\n4. 設定梯度洗脫 (Gradient Elution)，收集特定 UV 吸收峰。",
    notes: "上樣前樣品務必使用 0.22 μm 濾膜過濾，防止管柱阻塞。"
  },
  12: {
    title: "12. 凍乾機操作",
    materials: "預凍蛋白樣品、封口膜 (刺小孔)",
    equipment: "冷凍乾燥機 (Freeze Dryer)",
    procedure: "1. 樣品須於 -80°C 完全預凍結晶。\n2. 開啟凍乾機冷阱，待溫度降至 -50°C 以下。\n3. 放入樣品，啟動抽真空白幫浦至低於 100 mTorr。\n4. 乾燥完畢關閉真空閥，緩慢放氣後取回樣品。",
    notes: "樣品若未完全凍結直接抽真空會發生沸騰噴濺。"
  },
  13: {
    title: "13. Sep-Pak 操作",
    materials: "C18 Sep-Pak 固相萃取小管、甲醇、乙腈、100% 蒸餾水",
    equipment: "針筒 / 真空固相萃取裝置",
    procedure: "1. 甲醇活化管柱 ➔ 水平衡管柱。\n2. 上樣粗抽樣品液，極性雜質流出。\n3. 用低濃度有機溶劑洗滌雜質。\n4. 用高濃度有機溶劑洗脫目標細菌素並收集。",
    notes: "流速不可過快，保持每秒約 1-2 滴的流速最佳。"
  },
  14: {
    title: "14. 實驗器材清洗與保養",
    materials: "清潔劑、去離子水 (ddH2O)、75% 酒精",
    equipment: "超音波清洗機、烘箱",
    procedure: "1. 玻璃器材使用後立即浸泡洗劑洗淨。\n2. 用大量自來水沖洗 5 次，再用 ddH2O 沖洗 3 次。\n3. 置於 60°C 烘箱烘乾。\n4. 精密儀器（如微量吸管、電泳槽）酒精擦拭保養。",
    notes: "塑膠材質器材請留意耐熱溫度，避免高溫變形。"
  }
};

// 初始化頁面
document.addEventListener('DOMContentLoaded', () => {
  renderSopList();
  loadSopContent(1); // 預設載入第 1 個 SOP
  loadLogs();
  loadTodos();
  loadMemo();
});

// 分頁切換功能
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const targetTab = document.getElementById(`tab-${tabId}`);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  const navBtns = document.querySelectorAll('.nav-btn');
  const tabMap = { 'home': 0, 'sop': 1, 'logs': 2, 'plan': 3, 'tools': 4 };
  if (tabMap[tabId] !== undefined && navBtns[tabMap[tabId]]) {
    navBtns[tabMap[tabId]].classList.add('active');
  }
}

// 渲染左側 SOP 選單
function renderSopList() {
  const sopListUl = document.getElementById('sop-list');
  if (!sopListUl) return;

  sopListUl.innerHTML = '';
  Object.keys(sopData).forEach(id => {
    const li = document.createElement('li');
    li.textContent = sopData[id].title;
    li.onclick = () => {
      document.querySelectorAll('#sop-list li').forEach(item => item.classList.remove('active'));
      li.classList.add('active');
      loadSopContent(id);
    };
    if (id === '1') li.classList.add('active');
    sopListUl.appendChild(li);
  });
}

// 載入右側 SOP 詳細內容
function loadSopContent(id) {
  const container = document.getElementById('sop-content');
  const item = sopData[id];
  if (!container || !item) return;

  container.innerHTML = `
    <h2>${item.title}</h2>
    <hr>
    <div class="sop-block">
      <h4>🧪 實驗材料與試劑</h4>
      <p>${item.materials}</p>
    </div>
    <div class="sop-block">
      <h4>🛠️ 使用器材</h4>
      <p>${item.equipment}</p>
    </div>
    <div class="sop-block">
      <h4>📑 標準操作流程 (SOP)</h4>
      <p>${item.procedure.replace(/\n/g, '<br>')}</p>
    </div>
    <div class="sop-block alert">
      <h4>⚠️ 注意事項</h4>
      <p>${item.notes}</p>
    </div>
  `;
}

// 實驗紀錄表單處理（已加入圖片網址與參考連結處理）
const logForm = document.getElementById('log-form');
if (logForm) {
  logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('log-date').value;
    const title = document.getElementById('log-title').value;
    const content = document.getElementById('log-content').value;
    
    // 讀取圖片網址與參考連結 (如果欄位不存在則帶入空值)
    const imgUrlInput = document.getElementById('log-img-url');
    const linkInput = document.getElementById('log-link');
    const imgUrl = imgUrlInput ? imgUrlInput.value.trim() : '';
    const linkUrl = linkInput ? linkInput.value.trim() : '';

    const logs = JSON.parse(localStorage.getItem('lab_logs') || '[]');
    logs.unshift({ date, title, content, imgUrl, linkUrl });
    localStorage.setItem('lab_logs', JSON.stringify(logs));

    logForm.reset();
    loadLogs();
  });
}

// 載入歷史紀錄（已加入圖片與參考連結渲染功能）
function loadLogs() {
  const logList = document.getElementById('log-list');
  if (!logList) return;

  const logs = JSON.parse(localStorage.getItem('lab_logs') || '[]');
  if (logs.length === 0) {
    logList.innerHTML = '<p style="color: #9ca3af;">目前尚無紀錄。</p>';
    return;
  }

  logList.innerHTML = logs.map(log => `
    <div class="log-item">
      <h4>[${log.date}] ${log.title}</h4>
      <p style="color: #d1d5db; white-space: pre-wrap;">${log.content}</p>
      ${log.imgUrl ? `<img src="${log.imgUrl}" alt="實驗照片" class="log-img-preview" onerror="this.style.display='none'">` : ''}
      ${log.linkUrl ? `<a href="${log.linkUrl}" target="_blank" class="log-link-btn">🔗 開啟參考連結 / 文獻</a>` : ''}
    </div>
  `).join('');
}

// 待辦事項功能
function addTodo() {
  const input = document.getElementById('todo-input');
  if (!input || !input.value.trim()) return;

  const todos = JSON.parse(localStorage.getItem('lab_todos') || '[]');
  todos.push(input.value.trim());
  localStorage.setItem('lab_todos', JSON.stringify(todos));

  input.value = '';
  loadTodos();
}

function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('lab_todos') || '[]');
  todos.splice(index, 1);
  localStorage.setItem('lab_todos', JSON.stringify(todos));
  loadTodos();
}

function loadTodos() {
  const list = document.getElementById('todo-list');
  if (!list) return;

  const todos = JSON.parse(localStorage.getItem('lab_todos') || '[]');
  list.innerHTML = todos.map((todo, idx) => `
    <li>
      <span>${todo}</span>
      <button onclick="deleteTodo(${idx})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: bold;">✕</button>
    </li>
  `).join('');
}

// 研究備忘錄儲存
function saveMemo() {
  const memo = document.getElementById('memo-input').value;
  localStorage.setItem('lab_memo', memo);
}

function loadMemo() {
  const memoInput = document.getElementById('memo-input');
  if (memoInput) {
    memoInput.value = localStorage.getItem('lab_memo') || '';
  }
}