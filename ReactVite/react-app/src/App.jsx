import './App.css'
import Button from "./components/Button/Button.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import {useState} from "react";

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

    const [inputData, setInputData] = useState('');

    const inputChange = (event) => {
        setInputData(event.target.value)
    };

  return (
    <div className='app'>

        <LeftPanel>
            <Header />
            <JournalList>
                <JournalAddButton />
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
            </JournalList>
        </LeftPanel>

        <Body>
            <input type="text" value={inputData} onChange={inputChange}/>
        </Body>

    </div>
  )
}

export default App
