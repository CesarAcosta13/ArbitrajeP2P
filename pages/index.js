import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Input, Button, Text, Grid } from "@nextui-org/react";
import { useState } from "react";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  const [state, setState] = useState({
    capital: 0,
    priceBuy: 0,
    priceSell: 0,
  });
  const [profit, setProfit] = useState(0);

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit values");
    let purchased_amount = state.capital / state.priceBuy;
    let diff = purchased_amount * state.priceSell;
    let profitTotal = (diff - state.capital).toFixed(2);
    setProfit(profitTotal);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Arbitraje App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text h1>Arbitraje P2P</Text>
        <form onSubmit={onSubmit} className={styles.form}>
          <Grid.Container justify="center" gap={1} className={styles.card}>
            <Grid xs={12}>
              <Input
                fullWidth
                name="capital"
                label="Capital Inicial"
                placeholder="Ingrese el Capital Inicial"
                onChange={onChange}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                fullWidth
                name="priceBuy"
                label="Precio de Compra"
                placeholder="Ingrese el Precio de Compra"
                onChange={onChange}
              />
            </Grid>
            <Grid xs={6}>
              <Input
                fullWidth
                name="priceSell"
                label="Precio de Venta"
                placeholder="Ingrese el precio de venta"
                onChange={onChange}
              />
            </Grid>
            <Grid style={styles.button}>
              <Button type="submit">Calcular</Button>
            </Grid>
            <br></br>
            <Grid xs={12} justify="center">
              <Text h3>Su Ganancia total es : {profit}</Text>
            </Grid>
          </Grid.Container>
        </form>
      </main>

      <footer>Powered by CA Company</footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        /* card {
          max-width: 5rem;
        } */
        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          //margin: 0 auto;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        form {
          width: 50%;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
