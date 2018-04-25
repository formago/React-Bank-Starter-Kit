export default function getClientsModel() {
    return [
        {
            title: 'ID',
            dataIndex: 'clientId',
            key: 'clientId',
            // width: 40,
            // render: (text) => <a href="#">{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
        },
        {
            title: 'UNP',
            dataIndex: 'unp',
            key: 'unp',
        },
        {
            title: 'Type',
            dataIndex: 'identType',
            key: 'identType',
        },
        {
            title: 'Value',
            dataIndex: 'identValue',
            key: 'identValue',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Date Open',
            dataIndex: 'dateOpen',
            key: 'dateOpen',
        },
        {
            title: 'Date Close',
            dataIndex: 'dateClose',
            key: 'dateClose',
        }
        // {
        //   title: 'Action',
        //   key: 'action',
        //   width: 360,
        //   render: (text, record) => (
        //     <span>
        //       <a href="#">Action 一 {record.name}</a>
        //       <Divider type="vertical" />
        //       <a href="#">Delete</a>
        //       <Divider type="vertical" />
        //       <a href="#" className="ant-dropdown-link">
        //         More actions <Icon type="down" />
        //       </a>
        //     </span>
        //   ),
        // },
    ];
}
