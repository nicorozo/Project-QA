
const createRecordButton = document.getElementById('create-button')
const deleteRecordButton = document.getElementById('delete-button')

const fullName = document.getElementById('fld_fullname').value
const companyName = document.getElementById('fld_company_name').value
const fld_email = document.getElementById('fld_email').value
const companyUrl = document.getElementById('fld_company_url').value
const industryName = document.getElementById('fld_industry').value
const fld_phone = document.getElementById('fld_phone').value
const facebookUrl = document.getElementById('fld_fb_page').value

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




createRecordButton.addEventListener('click', function () {


    console.log(fullName)
})