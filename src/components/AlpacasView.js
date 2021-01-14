const AlpacasView = function(){
    return(
        <div className="card-deck">
        <div className="card bg-light text-center">
            <img src="hipster.jpg" alt="A hipster looking alpaca" className="img-fluid card-img-top rounded-circle alpaca-image"/>
            <div className="card-body">
                <h4 className="card-title">Hipster Alpaca</h4>
                <p className="card-text">Why did the hipster alpaca got burned? Because it changed the light before it was cool</p>

            </div>
                <div className="card-footer bg-light  border-top-0">
                    <button className="btn btn-primary">Learn more</button>
                </div>                
        </div>
        <div className="card bg-light text-center">
            <img src="alpaca-face.jpg" alt="A hipster looking alpaca" className="img-fluid card-img-top rounded-circle alpaca-image"/>
            <div className="card-body">
                <h4 className="card-title">Blond Alpaca</h4>
                <p className="card-text">Oh Alpacas, they just want to have fun, just want to have fun</p>

            </div>
                <div className="card-footer bg-light  border-top-0">
                    <button className="btn btn-primary">Learn more</button>
                </div>                
        </div>
        <div className="card bg-light text-center">
            <img src="lie-down.jpg" alt="A hipster looking alpaca" className="img-fluid card-img-top rounded-circle alpaca-image"/>
            <div className="card-body">
                <h4 className="card-title">Sliding Alpaca</h4>
                <p className="card-text">Went rolling through the hill</p>

            </div>
                <div className="card-footer bg-light  border-top-0">
                    <button className="btn btn-primary">Learn more</button>
                </div>                
        </div>
        </div>
    )
}
export default AlpacasView;