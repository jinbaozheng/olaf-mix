class Foo{
    /* @olaf-mix */
    static run(){
        const bar = {
            a: 'BAZ',
            b: 'QUX',
            c: '1',
            d: 1.2,
            e: 3*true,
            g: false,
            h: /^reg$/g,
            i: null
        }
        console.log(bar.baz)
    }
}

export default Foo;
