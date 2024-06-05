import './App.css'
import Button from "./components/Button/Button.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";

function App() {
    const data = [
        {
            title: 'Поход в горы',
            text: 'Горные породы открывают удивительные природные ландшафты',
            date: new Date()
        },
        {
            title: 'Лесное приключение',
            text: 'Прогулка по лесу позволяет насладиться красотой дикой природы и свежим воздухом',
            date: new Date()
        },
        {
            title: 'Путешествие к водопаду',
            text: 'Водопады завораживают своей мощью и красотой, создавая незабываемые впечатления',
            date: new Date()
        }
    ];

  return (
    <>
        <h1>Заголовок</h1>
        <p>Проект</p>
        <Button />
        <CardButton>
            Новое воспоминание
        </CardButton>
        <CardButton>
            <JournalItem
                title={data[0].title}
                text={data[0].text}
                date={data[0].date}
            />
        </CardButton>
        <CardButton>
            <JournalItem
                title={data[1].title}
                text={data[1].text}
                date={data[1].date}
            />
        </CardButton>
        <CardButton>
            <JournalItem
                title={data[2].title}
                text={data[2].text}
                date={data[2].date}
            />
        </CardButton>
    </>
  )
}

export default App
