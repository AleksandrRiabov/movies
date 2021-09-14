import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  
	actorsScroll: {
	   display: "flex",
	   overflow: "hidden",
	   overflowX: "scroll",
	   marginBottom: "50px",
	  '&::-webkit-scrollbar': {
       height: "8px" 
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 10px rgba(0,0,,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#dbdbdb',
		borderRadius: "20px", 
        outline: 'none',
      }
		
	},
	sectionTitle: {
		margin: "30px 30px 30px  0"
	},
	card: {
		display: "block",
		width: "138px",
		margin: "10px",
		borderRadius: "10px",
		overflow: "hidden",
		boxShadow: "0 2px 8px rgb(0 0 0 / 10%)"
	},
	cardText: {
		padding: "0 10px",
		color: "#000"
	}
}));