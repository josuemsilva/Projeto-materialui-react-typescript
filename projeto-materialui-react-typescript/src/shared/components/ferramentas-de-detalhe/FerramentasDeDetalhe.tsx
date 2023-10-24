import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"


interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;

}

export const FerramentasDeDetalhe:React.FC<IFerramentasDeDetalheProps> = ({
textoBotaoNovo = 'Novo',

mostrarBotaoNovo = true,
mostrarBotaoVoltar = true,
mostrarBotaoApagar = true,
mostrarBotaoSalvar = true,
mostrarBotaoSalvarEFechar = false,

aoClicarEmNovo,
aoClicarEmVoltar,
aoClicarEmApagar,
aoClicarEmSalvar,
aoClicarEmSalvarEFechar,

}) => {
  const theme = useTheme();

  return (
    <Box
    alignItems="center"
    gap={1}
    marginX={1}
    padding={1}
    paddingX={2}
    display="flex"
    height={theme.spacing(5)}
    component={Paper}
    >
    {mostrarBotaoSalvar && (<Button
        disableElevation
        variant="contained"
        onClick={aoClicarEmSalvar}
        startIcon={<Icon>save</Icon>}>

        Salvar</Button>)}

    {mostrarBotaoSalvarEFechar && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmSalvarEFechar}
        startIcon={<Icon>save</Icon>}>
        Salvar e voltar</Button>)}

    {mostrarBotaoApagar && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}>
        Apagar</Button>)}

    {mostrarBotaoNovo && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}>
        {textoBotaoNovo}</Button>)}

      <Divider variant="middle" orientation="vertical"/>

    {mostrarBotaoVoltar && (<Button
        disableElevation
        variant="outlined"
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}>
        Voltar</Button>)}

    </Box>
  )
}