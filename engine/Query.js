/**
 * Root container of query-level state.
 * Builds query execution plan.
 * Executes query.
 * Applies guardrails, tracing.
 */
 
exports.Query = function Query() {
    this.provider = null;


};

/**
 * Set the provider for operator metadata to be used during query execution.
 *
 * @param provider Metadata provider.
 */
Query.prototype.setMetadataProvider = function(provider) {
    this.provider = provider;
    return this;
}

/**
 *
 * @param qnode Qnode to add.
 */
Query.prototype.addQnode = function(qnode) {

}