import { useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTredingMovies from '../hooks/useTredingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MainContainer from '../mainContainer/MainContainer';
import SecondaryContainer from '../secondaryContainer/SecondaryContainer';
import GptSearchPage from '../gptSearch/GptSearchPage';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();
    useTredingMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            {showGptSearch ? <GptSearchPage /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    );
};

export default Browse;