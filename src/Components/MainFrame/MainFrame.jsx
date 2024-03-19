import './MainFrame.css';
import Sheet from '../Sheet/Sheet';
import SheetMenu from '../SheetMenu/SheetMenu';

const MainFrame = () => {
    
    return(<>
        <div className="Fondo">
            <SheetMenu/>
            <Sheet/>
        </div>
    </>)
}


export default MainFrame