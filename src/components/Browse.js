import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './mainContainer/MainContainer';
import SecondaryContainer from './secondaryContainer/SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
};

export default Browse;