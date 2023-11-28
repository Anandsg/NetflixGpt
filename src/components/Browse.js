import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useTredingMovies from './hooks/useTredingMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';
import MainContainer from './mainContainer/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();
    useTredingMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;