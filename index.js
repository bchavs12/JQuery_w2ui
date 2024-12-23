let id = 0;

const users = [
  { id: id++, name: 'Regina', age: 32 },
  { id: id++, name: 'Reginaldo', age: 15 },
  { id: id++, name: 'Regis', age: 16 },
  { id: id++, name: 'Rogerio', age: 24 },
];

console.table(users)

// Carregar as tarefas da Grid
function carregarGrid() {
  if (w2ui['taskGrid']) w2ui['taskGrid'].destroy(); // Evita recriação

  $("#grid").w2grid({
    name: 'taskGrid',
    columns: [
      { field: 'id', caption: 'ID', size: '50px' },
      { field: 'name', caption: 'Nome', size: '50%' },
      { field: 'age', caption: 'Idade', size: '50%' },
    ],
    records: users.map((user, index) => ({
      recid: index + 1, // Necessário para o W2UI
      id: user.id++,
      name: user.name,
      age: user.age
    }))
  })
}

// Inicializar Grid ao carregar
$(document).ready(function () {
  carregarGrid();
});