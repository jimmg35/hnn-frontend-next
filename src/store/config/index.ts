// import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from '../storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  // stateReconciler: autoMergeLevel2
}

export default persistConfig
