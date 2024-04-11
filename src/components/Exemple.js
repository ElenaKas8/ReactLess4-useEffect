import { useEffect 	} from 'react'


// useEffect - это хук, который вызывает побочный код в момент наступления указанного 
// этапа жизненного цикла компонента
const Exemple = () => {
console.log('инициализация!');

    useEffect(() => {
        console.log('монтирование компонента');
    })
  return (
    <div>Exemple</div>
  )
}

export default Exemple