import dotenv from 'dotenv'

dotenv.config()

const config = {
  api_host: 'http://localhost:3000',
  site_title: 'Point Of Sale',
  global_ongkir: 20000,
  owner: 'Rahmat Hidayatullah',
  contact: 'rahmathidayatullah996@gmail.com',
  billing: {
    account_no: 'xxxx-xxxxx-33-34',
    bank_name: 'BRI',
  },
}

export { config }
