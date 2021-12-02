import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const CssTextField = withStyles({
    root: {
       '& label.Mui-focused': {
          color: '#000000',
       },
       '& .MuiInput-underline:after': {
          borderBottomColor: '#000000',
       },
       '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
             borderColor: '#000000',
          },
          '&.Mui-focused fieldset': {
             borderColor: '#000000',
          },
       },
    },
 })(TextField);