// HorizontalListing
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	sectionScroll: {
	   display: "flex",
	   overflow: "hidden",
	   overflowX: "scroll",
	   marginBottom: "30px",
		minHeight: "260px",
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

}));