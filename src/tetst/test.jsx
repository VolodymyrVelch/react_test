import {Block} from './test.styled'


export const Button = () => {
   return <Block>
        <button onClick={event => console.log(event)}>Click me!</button>
    </Block>
}
    

    