import DS from 'ember-data';
import HasManyQuery from 'ember-data-has-many-query';

export default DS.Model.extend(HasManyQuery.ModelMixin, {
    name: DS.attr('string'),
    permissions: DS.attr(),
    createdOn: DS.attr('date'),
    documents: DS.hasMany('document', {async: true}),
    namespace: DS.belongsTo('namespace'),
});
