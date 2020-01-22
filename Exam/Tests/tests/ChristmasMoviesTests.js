const ChristmasMovies = require("../02. Christmas Movies_Resources.js");
let expect = require("chai").expect;

describe('Christmas Movies', function () {
    it("Constructor", function () {
        let instance = new ChristmasMovies();
        expect(typeof instance).to.equal('object');
    });

    it("movieCollection", function () {
        let instance = new ChristmasMovies();
        expect(instance.movieCollection).to.deep.equal([]);
    });

    it("movieCollection length", function () {
        let instance = new ChristmasMovies();
        expect(instance.movieCollection).to.has.lengthOf(0);
    });

    it("watched", function () {
        let instance = new ChristmasMovies();
        expect(instance.watched).to.deep.equal({});
    });

    it("watched", function () {
        let instance = new ChristmasMovies();
        expect(instance.actors).to.deep.equal([]);
    });

    it("watched", function () {
        let instance = new ChristmasMovies();
        expect(instance.actors).to.has.lengthOf(0);
    });

    // class methods
    
    it("buyMovie actors", function () {
        let instance = new ChristmasMovies();
        let res = instance.buyMovie('m', ['a1', 'a2']);
        expect(instance.movieCollection).to.deep.equal([{ name: 'm', actors: ['a1', 'a2'] }]);
    });

    it("buyMovie actors len", function () {
        let instance = new ChristmasMovies();
        let res = instance.buyMovie('m', ['a1', 'a2']);
        let res2 = instance.buyMovie('m2', ['a1', 'a2']);
        expect(instance.movieCollection).to.has.lengthOf(2);
    });

    it("buyMovie actors", function () {
        let instance = new ChristmasMovies();
        let res = instance.buyMovie('m', ['a1', 'a1']);
        expect(instance.movieCollection).to.deep.equal([{ name: 'm', actors: ['a1'] }]);
    });

    it("buyMovie actors msg", function () {
        let instance = new ChristmasMovies();
        let res = instance.buyMovie('m', ['a1', 'a2']);
        expect(res).to.equal(`You just got m to your collection in which a1, a2 are taking part!`);
    });

    it("buyMovie actors err", function () {
        let instance = new ChristmasMovies();
        let res = instance.buyMovie('m', ['a1', 'a2']);
        expect(() => instance.buyMovie('m', ['a3', 'a4'])).to.throw(Error, `You already own m in your collection!`);
    });

    // discard
    
    it("discardMovie", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.watchMovie('m');
        let res = instance.discardMovie('m');
        expect(instance.movieCollection).to.deep.equal([]);
    });

    it("discardMovie not watched", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);

        expect(() => instance.discardMovie('m')).to.throw(Error,`m is not watched!`);
    });

    it("discardMovie msg", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.watchMovie('m');
        let res = instance.discardMovie('m');
        expect(res).to.equal(`You just threw away m!`);
    });

    // WatchMovie
    it("WatchMovie msg 1", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.watchMovie('m');

        expect(instance.watched).to.deep.equal({m:1});
    });

    it("WatchMovie msg 2", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.watchMovie('m');
        instance.watchMovie('m');

        expect(instance.watched).to.deep.equal({m:2});
    });

    it("WatchMovie msg 1", function () {
        let instance = new ChristmasMovies();
        expect(() => instance.watchMovie('m')).to.throw(Error,'No such movie in your collection!');
    });

    // favouriteMovie

    it("favouriteMovie msg 1", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.watchMovie('m');
        let res = instance.favouriteMovie();
        expect(res).to.equal(`Your favourite movie is m and you have watched it 1 times!`);
    });

    it("favouriteMovie msg 1", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
        instance.buyMovie('m1', ['a1', 'a2']);
        instance.watchMovie('m');
        instance.watchMovie('m1');
        instance.watchMovie('m1');
        let res = instance.favouriteMovie();
        expect(res).to.equal(`Your favourite movie is m1 and you have watched it 2 times!`);
    });

    it("favouriteMovie msg", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1', 'a2']);
           expect(() => instance.favouriteMovie()).to.throw(Error,'You have not watched a movie yet this year!');
    });

    // mostStarredActors

    it("mostStarredActors", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1']);
        let res = instance.mostStarredActor();
        expect(res).to.equal(`The most starred actor is a1 and starred in 1 movies!`);
    });

    it("mostStarredActors 2", function () {
        let instance = new ChristmasMovies();
        instance.buyMovie('m', ['a1']);
        instance.buyMovie('m1', ['a1', 'a2']);
        instance.buyMovie('m3', ['a1', 'a2']);
        let res = instance.mostStarredActor();
        expect(res).to.equal(`The most starred actor is a1 and starred in 3 movies!`);
    });

    it("mostStarredActors", function () {
        let instance = new ChristmasMovies();
        expect(() => instance.mostStarredActor()).to.throw(Error,'You have not watched a movie yet this year!');
    });
})