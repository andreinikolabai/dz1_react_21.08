var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var carsTitle = "Car Specs";
var carsData = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];
var Cars = React.createElement(
    React.Fragment,
    null,
    React.createElement(
        "h1",
        null,
        carsTitle
    ),
    React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            carsData.map(function (car) {
                return React.createElement(
                    React.Fragment,
                    { key: car.id },
                    React.createElement(
                        "tr",
                        { className: "row__brand", style: { background: "#4051B5", color: "white" } },
                        React.createElement(
                            "th",
                            { colSpan: "2" },
                            car.brand
                        )
                    ),
                    car.models.map(function (model) {
                        return model.collection.map(function (item, index) {
                            return React.createElement(
                                React.Fragment,
                                { key: item.id },
                                index === 0 && React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "th",
                                        { rowSpan: model.collection.length, className: "cell__model", style: { background: "#E91E63", color: "white" } },
                                        model.name
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                "Version: ",
                                                item.version
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Year: ",
                                                item.year
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Horsepower: ",
                                                item.horsepower
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Engine: ",
                                                item.engine
                                            )
                                        )
                                    )
                                ),
                                index !== 0 && React.createElement(
                                    "tr",
                                    null,
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                "Version: ",
                                                item.version
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Year: ",
                                                item.year
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Horsepower: ",
                                                item.horsepower
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                "Engine: ",
                                                item.engine
                                            )
                                        )
                                    )
                                )
                            );
                        });
                    })
                );
            })
        )
    )
);

root.render(Cars);