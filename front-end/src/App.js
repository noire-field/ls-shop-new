import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group'

import './assets/style.scss';

import HomeStore from './pages/HomeStore';
import Welcome from './pages/Welcome';
import Loading from './components/Loading';

import Logger from './utils/logger';
import axios from './utils/axios';
import { MapItemsToCategories } from './utils/items';

import { AppSetFetching, AppSetLoading, AppSetStatus } from './store/actions/app.action';
import { StoreSetCategories } from './store/actions/store.action'

function App() {
	const status = useSelector(state => state.app.status);
	const loading = useSelector(state => state.app.loading);
	const dispatch = useDispatch();

	Logger.Log(`[App] Render (State: ${status})`);

	useEffect(() => {
		switch(status) {
			case 0: // Prepare for loading
				dispatch(AppSetLoading(true));
				dispatch(AppSetStatus(1));
				dispatch(AppSetFetching(true));

				break;
			case 1: // Now loading
				axios.get('/shop-api.php?act=GetShopContent').then(({ data }) => {
					if(data.success) {
						dispatch(StoreSetCategories(MapItemsToCategories(data.categories, data.items)));
						dispatch(AppSetFetching(false));
						dispatch(AppSetLoading(false));
						dispatch(AppSetStatus(2));
					}
				}).catch((error) => {
					console.error(`Unable to fetch shop content from API.`);
				});
			break;
		}

	}, [status, dispatch]);

	return (
		<React.Fragment>
			{ status < 2 &&
				<Welcome/>
			}
			{ status == 2 &&
				<HomeStore/>
			}
			<CSSTransition in={loading} timeout={250} classNames="anim-slideup-loading" unmountOnExit>
                <Loading/>
            </CSSTransition>
		</React.Fragment>
	)
}

export default App;
