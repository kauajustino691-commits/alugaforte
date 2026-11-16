const tools = [
  { id: 1, name: 'Furadeira de Impacto 650W', category: 'Pequeno porte', price: 85, icon: '🛠️', desc: 'Furadeira elétrica para perfurações e pequenos serviços.' },
  { id: 2, name: 'Serra Mármore 1.300W', category: 'Pequeno porte', price: 120, icon: '⚙️', desc: 'Equipamento compacto para cortes em alvenaria e materiais compatíveis.' },
  { id: 3, name: 'Compactador de Solo', category: 'Médio porte', price: 320, icon: '🔨', desc: 'Compactador para preparação e nivelamento de terrenos.' },
  { id: 4, name: 'Gerador 8 kVA', category: 'Médio porte', price: 480, icon: '🔌', desc: 'Gerador para apoio temporário em obras e serviços.' },
  { id: 5, name: 'Mini Escavadeira 2,5 t', category: 'Grande porte', price: 850, icon: '🚜', desc: 'Mini escavadeira para movimentação de terra e serviços de maior porte.' }
];

let selected = null, freight = 35, payment = 'Pix';
const money = v => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function render(filter = 'Todos') {
  const box = document.getElementById('cards');
  box.innerHTML = '';
  tools.filter(t => filter === 'Todos' || t.category === filter).forEach(t => {
    const c = document.createElement('article');
    c.className = 'card';
    c.dataset.category = t.category;
    c.innerHTML = `
      <div class="visual">${t.icon}</div>
      <div class="card-body">
        <span class="tag">${t.category}</span>
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
        ${t.price > 500 ? '<div class="insurance-note">Seguro obrigatório: diária acima de R$ 500</div>' : ''}
        <div class="price">${money(t.price)} <small>/ dia</small></div>
        <button class="btn btn-dark" style="width:100%" onclick="selectTool(${t.id})">Alugar ferramenta</button>
      </div>
    `;
    box.appendChild(c);
  });
}

function filterCards(f, el) {
  document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
  el.classList.add('active');
  render(f);
}

function selectTool(id) {
  selected = tools.find(t => t.id === id);
  document.getElementById('rental').style.display = 'block';
  document.getElementById('selectedIcon').textContent = selected.icon;
  document.getElementById('selectedName').textContent = selected.name;
  document.getElementById('selectedCategory').textContent = selected.category;
  document.getElementById('sumName').textContent = selected.name;
  document.getElementById('days').value = 1;
  calculate();
  document.getElementById('rental').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function calculate() {
  if (!selected) return;
  const days = Math.max(1, parseInt(document.getElementById('days').value) || 1);
  const rental = selected.price * days;
  const insurance = selected.price > 500 ? 50 : 0;
  document.getElementById('sumDaily').textContent = money(selected.price);
  document.getElementById('sumDays').textContent = days;
  document.getElementById('sumRental').textContent = money(rental);
  document.getElementById('insuranceBox').style.display = insurance ? 'block' : 'none';
  document.getElementById('insuranceText').textContent = money(insurance);
  document.getElementById('sumTotal').textContent = money(rental + insurance + freight);
}

function calculateFreight() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');
  if (cep.length >= 5) {
    const n = parseInt(cep.slice(-3)) || 0;
    freight = 25 + (n % 76);
  } else {
    freight = 35;
  }
  document.getElementById('sumFreight').textContent = money(freight);
  calculate();
}

function selectPay(el, p) {
  document.querySelectorAll('.pay').forEach(x => x.classList.remove('selected-pay'));
  el.classList.add('selected-pay');
  payment = p;
  document.getElementById('paymentText').textContent = p;
}

function finish() {
  if (!selected) return;
  document.getElementById('success').style.display = 'block';
  document.getElementById('finalContact').style.display = 'block';
  document.getElementById('success').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function backCatalog() {
  document.getElementById('rental').style.display = 'none';
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

render();