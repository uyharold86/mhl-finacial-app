import Head from 'next/head'
import {promises as fs} from 'fs'
import path form 'path'
import Papa from 'papaparse'

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data/transactions.csv');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return {
    props: {
      transactions: Papa.parse(fileContents, {
        header: true,
        delimeter: ",",

      }).data
    } 
  }
}

export default function Home({transactions, rawFileContents}) {
    console.log(transactions, rawFileContents)
  return (
    <div className="container">
      <Head>
        <title>MLH Finance</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap" rel="stylesheet"/> 
      </Head>

      <main>
       <header>
        <h1>
          <span className="header-title-red">M</span>
          <span className="header-title-yellow">L</span>
          <span className="header-title-blue">H</span> Finance
        </h1>
       </header>
        <div className="transactions">
          {transactions.map(transaction => (
            <Transaction 
              date = {transacition.Date} 
              amount={transaction.Amount} 
              merchant={transaction.Description} 
              key={`${transaction.Date}-${transaction.Amount}-${Math.random()}`}
            />
           ))}
        </div>
      </main>

      

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          
        }

        main {
          width: 100%;
          height: 120px;
          padding: 5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding 0;
          text-align: center; 
        }

        .header-title-red {
          color: #e73427;
        }  

        .header-title-blue {
          color: #1d539f;
        }     

        .header-title-yellow {
          color: #f8b92a;
        } 

        .header {
          width: 100%;
          backgeound: #f7f7f7;

        }

        .header h1{
          font-size: 40px;
          display: flex;
          flex-direction:: column;
          margin: 20px 0 12px 0;
          text-shadow: 0;
          display: flex;
          flex-direction: column;

        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Teko', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

function Transaction({date, amount, merchant}) {
  return (
    <div className="ttransaction">
      <p></p>

    </div>
  )
}