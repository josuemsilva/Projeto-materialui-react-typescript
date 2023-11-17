import {useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBase } from "../../shared/layouts/LayoutBase";
import { PessoasService } from "../../shared/services/pessoas/PessoasService";
import { LinearProgress } from '@mui/material';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState();

  useEffect(() => {
    if(id !== 'nova') {
      setIsLoading(true);

      PessoasService.getById(Number(id))
      .then((result) => {
        setIsLoading(false);

        if(result instanceof Error) {
            alert(result.message);
            navigate('/pessoas');
        } else {
            setNome(result.nomeCompleto);
            console.log(result);
        }
      });
    }
  }, [id, navigate]);

  const handleSave = () => {
    console.log('Save');
  };

  const handleDelete = (id:number) => {
    if(confirm('Realmente deseja apagar?')) {
        PessoasService.deleteById(id)
        .then(result => {
          if(result instanceof Error) {
            alert(result.message)
          } else {
            alert('Registro apagado com sucesso!');
            navigate('/pessoas');
          }
        });
    }
  };


  return (
    <LayoutBase
    title= {id === 'nova' ? 'Nova pessoa' : nome}
    BarraDeFerramentas={
      <FerramentasDeDetalhe
      mostrarBotaoApagar={id !== 'nova'}
      mostrarBotaoNovo={id !== 'nova'}
      mostrarBotaoSalvarEFechar
      textoBotaoNovo="Nova"

      aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
      aoClicarEmApagar={() => handleDelete(Number(id))}
      aoClicarEmVoltar={() => navigate('/pessoas')}
      aoClicarEmSalvarEFechar={handleSave}
      aoClicarEmSalvar={handleSave}
      />
    }
  >
    {isLoading && (
      <LinearProgress variant='indeterminate'/>
    )}
      <p>Detalhes {id}</p>
    </LayoutBase>

  )
};