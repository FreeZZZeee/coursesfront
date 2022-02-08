import React, {useState} from "react";
import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag={'h1'}>Заголовок</Htag>
            <Button appearance={'primary'} arrow={'right'}>Кнопка</Button>
            <Button appearance={'ghost'} arrow={'down'}>Кнопка</Button>
            <Ptag size={'l'}>Текст параграф большой</Ptag>
            <Ptag>Текст параграф средний</Ptag>
            <Ptag size={'s'}>Текст параграф маленький</Ptag>
            <Tag size={'s'} color={'red'}>Маленький</Tag>
            <Tag size={'m'} color={'primary'}>Средний</Tag>
            <Tag size={'m'}>Средний Ghost</Tag>
            <Tag size={'m'} color={'green'}>Средний зеленый</Tag>
            <Tag size={'m'} color={'gray'}>Средний серый</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);
