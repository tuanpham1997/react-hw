class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}


class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <p>{this.props.reviews.name}</p>
                <div className="statbox">{this.props.reviews.count.map(number => <p>{number}</p>)}</div>
                {/* <p>Name</p>
                <p>Values</p> */}
            </div>
        )
    }
}

class Visitors extends React.Component {
    render() {
        return (
            <div className="visitors">
                <p>Website Visitors</p>
                <p>821</p>
                <div className="innerBox"></div>
            </div>
        )
    }
}

/* class VisitorsInside extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
} */
// console.log(reviews)
class App extends React.Component {
    state = {
        data: reviews
    }

    render() {
        return (
            <div className="container">
                <SideBar />
                {reviews.map(object => <Stats reviews={object}/>)}
                {/* <Stats reviews={reviews[0]}/>
                <Stats reviews={reviews[1]}/>
                <Stats reviews={reviews[2]}/> */}
                <Visitors />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
);