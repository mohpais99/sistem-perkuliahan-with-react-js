import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CustomModal } from 'admin/molekuls';
import { Sidebar } from 'admin/components';
import { connect } from 'react-redux';
// import { Provider } from 'config';
import routes from '../Routes';
import './style.css';
import { Firebase } from 'config';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null
        this.state = {
            _notificationSystem: null,
            hasImage: true,
            width: window.innerWidth,
            user: null
        };
        this.ref = Firebase.firestore().collection("users")
    }

    componentDidMount() {
        this.unsubscribe = this.onCollectionUpdate()
    }
    
    async onCollectionUpdate() {
        const local = JSON.parse(localStorage.getItem('user'))
        const user = await this.ref.doc(local.uid).get();
        this.setState({user: user.data()})
    }
    // getRoutes = (routes) => {
    //     return routes.map((prop, key) => {
    //         if (prop.layout === "/admpanel") {
    //             return (
    //                 <Provider 
    //                     key={key}
    //                     path={prop.layout + prop.path}
    //                     render={props => 
    //                         <prop.component {...props} />
    //                     } />
    //             );
    //         } else {
    //             return null
    //         }
    //     });
    // }
    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admpanel") {
                return (
                    <Route 
                        key={key}
                        path={prop.layout + prop.path}
                        render={props => 
                            <prop.component {...props} />
                        } />
                );
            } else {
                return null
            }
        });
    }
    render() {
        return (
            <>
                {
                    this.props.modal.status && (
                        <CustomModal {...this.props.modal} />
                    )
                }
                <div className="wrapper">
                    <Sidebar 
                        {...this.props}
                        {...this.state.user}
                        routes={routes} />
                    <div className="content">
                        <Switch>{this.getRoutes(routes)}</Switch>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.Modal
});

export default connect(mapStateToProps)(Admin);
