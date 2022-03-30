import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "Alunos",
        columns: [
          {
            Header: "Identificação",
            accessor: "identificacao"
          },
          {
            Header: "Nome",
            accessor: "nome"
          },
          {
            Header: "Data Nascimento",
            accessor: "dataNascimento"
          },
          {
            Header: "Sexo",
            accessor: "sexo"
          },
          {
            Header: "Média",
            accessor: "media"
          },
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/api/aluno", {headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'}});
      console.log(result)
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
