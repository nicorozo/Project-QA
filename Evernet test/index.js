const token = 'WF4G7N2yKjDHpGVUaPoVqmxBgkCHGNxh';
const tableId = 114016;

fetch(`https://api.baserow.io/api/database/rows/table/${tableId}/`, {
    headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
    },
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


