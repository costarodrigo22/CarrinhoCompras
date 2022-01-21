import {Container} from './style';

export default function Button(props){
  return(
    <Container>{props.children}</Container>
  );
}