import React from 'react'
import renderer from 'react-test-renderer'
import Photos from './Photos'

test('Photos component renders correctly', () => {
    let images = [
        {id: 'img-1', title:'image one', mediaUrl: 'http://www.kinyu-z.net/data/wallpapers/61/916941.jpg' },
        {id: 'img-2', title:'image two', mediaUrl: 'http://www.kinyu-z.net/data/wallpapers/61/916941.jpg' },
        {id: 'img-3', title:'image three', mediaUrl: 'http://www.kinyu-z.net/data/wallpapers/61/916941.jpg' },
    ]

    const tree = renderer.create(
        <Photos images={images}
                selectedImage={images[0]}
                onHandleSelectImage={alert('image selected')}
                onHandleSaveImage={alert('image saved')} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});