import { useState } from 'react'
import './App.css'

function App() {
  const [atividades, setAtividades] = useState([]);  
  const [concluidas, setConcluidas] = useState([]);  
  const [novaAtividade, setNovaAtividade] = useState('');

  const handleAddConcluidas = (index) => {  
    const newConcluidas = [...concluidas, atividades[index]];
    setConcluidas(newConcluidas);
    handleRemoverAtividade(index);
  };

  const handleRemoverAtividade = (index) => {  
    const newAtividades = atividades.filter((_, i) => i !== index);
    setAtividades(newAtividades);
  };

  const handleRemoveConcluidas = (index) => {  
    const newConcluidas = concluidas.filter((_, i) => i !== index);
    setConcluidas(newConcluidas);
  };

  const handleAdicionarAtividade = () => {
    if (novaAtividade.trim() !== '') {
      setAtividades([...atividades, { nome: novaAtividade }]);
      setNovaAtividade('');
    }
  };

  return (
    <>
     <div className="all">
        <h1 className="home">Home</h1>
        <input
        className="input"
          type="text"
          value={novaAtividade}
          onChange={(e) => setNovaAtividade(e.target.value)}
        />
        <br></br>
        <button className="add" onClick={handleAdicionarAtividade}>Adicionar Nota</button>

        <div className="container">
          <div className="list">
            <table id="tabAtividades">  
              <thead>
                <tr>
                  <th className="title">Notas Adicionadas</th>
                </tr>
              </thead>
              <tbody>
                {atividades.map((atividade, index) => (
                  <tr className="center" key={index}>
                    <td>{atividade.nome}</td>
                    <td>
                      <button className="concluir" onClick={() => handleAddConcluidas(index)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="list">
            <table id="tabConcluidas"> 
              <thead>
                <tr>
                  <th  className="title">Notas Excluídas</th>
                </tr>
              </thead>
              <tbody>
                {concluidas.map((concluida, index) => (
                  <tr className="center" key={index}>
                    <td>
                      <button className="removee" onClick={() => handleRemoveConcluidas(index)}>-</button>
                    </td>
                    <td>{concluida.nome}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
