import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {

    const selectOptions = [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
    ]

    return (
        <div>

            <MyInput
                placeholder={'Поиск...'}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                value={filter.query} />

            <MySelect
                defaultValue={'Сортировка'}
                options={selectOptions}
                value={filter.sort}
                onChange={e => setFilter({ ...filter, sort: e.target.value })}

            />
        </div>
    )
}


export default PostFilter