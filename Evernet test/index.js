
const createRecordButton = document.getElementById('create-button')
const deleteRecordButton = document.getElementById('delete-button')

const fullName = document.getElementById('fld_fullname')
const companyName = document.getElementById('fld_company_name')
const fld_email = document.getElementById('fld_email')
const companyUrl = document.getElementById('fld_company_url')
const industryName = document.getElementById('fld_industry')
const fld_phone = document.getElementById('fld_phone')
const facebookUrl = document.getElementById('fld_fb_page')

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